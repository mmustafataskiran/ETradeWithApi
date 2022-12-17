﻿using ETradeWithApi.Core;
using ETradeWithApi.Dto;
using ETradeWithApi.Entity.Concretes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETradeWithApi.Repos.Abstracts
{
    public interface ICountyRep : IBaseRepository<County>
    {
        List<CountiesDTO> GetCountyDTO();
    }
}
