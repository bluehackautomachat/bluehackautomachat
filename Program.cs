using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace automachat
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
            // ConversationHelper helper = new ConversationHelper(
            //     userId: "e3286c5c-27a1-46ca-a7e4-8a9e7fa082cb",
            //     password: "Gz3uGsMgSXO2",
            //     workSpaceId: "d6983c88-1ec9-4956-a3e5-ddda197c9392");
            // var res = helper.GetResponse("Hi").GetAwaiter().GetResult();  
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .Build();
    }
}