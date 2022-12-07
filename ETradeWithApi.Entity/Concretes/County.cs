﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETradeWithApi.Entity.Concretes
{
    public class County : BaseDescription
    {
        public int CityId { get; set; }

        [ForeignKey("CityId")]
        public City City { get; set; }
        public ICollection<Users> Users { get; set; }
    }
}
