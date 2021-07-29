using Application;
using Application.Interfaces.Offers;
using Application.Interfaces.Products;
using Application.Profiles;
using Application.UseCases;
using Application.UseCases.Offers;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using Infrastructure.Repositorys;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.IO;
using System.Reflection;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
          
            //CORs
            services.AddCors();

            //Conexao BD
            var connectionString = Configuration.GetConnectionString("LeilaoEletronicoCs");
            services.AddDbContextPool<LeilaoDbContext>(options => options.UseMySql(
                connectionString, ServerVersion.AutoDetect(connectionString)));

            //Interfaces Repositorys
            services.AddTransient<IOfferRepository, OfferRepository>();
            services.AddTransient<IProductRepository, ProductRepository>();

            //Interfaces UseCases
            services.AddTransient<IGetOfferUseCase, GetOfferUseCase>();
            services.AddTransient<IPostOfferUseCase, PostOfferUseCase>();
            services.AddTransient<IGetProductUseCase, GetProductUseCase>();
            services.AddTransient<IPostProductUseCase, PostProductUseCase>();

            //AutoMapper
            services.AddAutoMapper(typeof(ProductProfile));

            //Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "LeilaoEletronico API",
                    Description = "The ASP.NET Core Web API is simple to be consumed by an" +
                " electronic auction application in Portuguese(Brazil) 'Leilão Eletronico'," +
                " where you can register and retrieve products and do the same with new bids.",
                    TermsOfService = new Uri("https://example.com/terms"),
                    Contact = new OpenApiContact
                    {
                        Name = "Pedro Henrique",
                        Email = "pedrooheenrique159@gmail.com",
                    },
                    License = new OpenApiLicense
                    {
                        Name = "Pedro Henrique",
                    }
                }) ;

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Leilao Eletronico V1");
                    c.RoutePrefix = string.Empty;
                });
            }

            //CORS
            app.UseCors(
                builder =>
                {
                    builder
                        .AllowCredentials()
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        // .SetIsOriginAllowed((host) => true);
                        .SetIsOriginAllowed(isOriginAllowed: _ => true);
                });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
