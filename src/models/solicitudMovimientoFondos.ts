export interface SolicitudMovimientoFondos {
    /**Identificador único del movimiento
     */
    IdMovimiento: string;
    /**Cuenta en la que se impacta el movimiento */
    Comitente: Comitente;
    /**Ordenante que genera el movimiento */
    Ordenante: Ordenante;
    /**CBU del origen de los fondos */
    CbuOrigen: string;
    /**CBU del destino de los fondos */
    CbuDestino: string;
    /**Fecha de registración del movimiento */
    fechaMovimiento: Date | string | null;
    /**Fecha de acreditación del movimiento */
    FechaEjecucion: Date | string | null;
    /**Referencia o datos adicionales complementarios */
    Referencia: string;
    /**Importe de la transferencia */
    ImporteMovimiento: ImporteMovimiento;
    IdRecaudadora: number | null;
}

    /**Datos de la persona que ordena el movimiento */
    export interface Ordenante {
        /**Nombre y apellido completos o razón social */
        NombreCompleto: string;
        /**Tipo de documento */
        TipoDocumento: TipoDocumento;
        /**Número de documento */
        NumeroDocumento: number;
    }



export interface Comitente {
    /**Número de cuenta comitente */
    NumeroCuentaComitente: number;
    /**Tipo de identificador */
    TipoIdentificador: TipoIdentificador;
    /**Número de identificador */
    NumeroIdentificador: number;
}

export enum TipoDocumento {
    Dni,
    LibretaEnrolamiento,
    LibretaCivica,
    Otros
}

export enum TipoIdentificador {
    Cuit,
    Cuil
}

export interface ImporteMovimiento {
    /**Moneda */
    Moneda: Moneda;
    /**Monto */
    Monto: number;
}


export enum Moneda {
    /**AR$ */
    PesosArgentinos = 1,
    /**u$s */
    DolaresUSA
}