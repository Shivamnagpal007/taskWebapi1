﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace taskWebapi.Models.Dtos
{
    public class empdepdto
    {
        public int empId { get; set; }
        public string ename { get; set; }
        public string eadd { get; set; }
        public int esal { get; set; }
        public int dsgId { get; set; }
        public int depId { get; set; }
    }
}
