import styles from './styles.css'


export default function Form(){
    return(
        <>
         
        <div className='simulator'>
           
            <div className='simulator-forms'>
                <h1>Simulador</h1>

                    <div className='form-container'>

                        <div className='form-select'>

                                <div className='rendimento-form'>
                                    
                                    <div className='form-select-title'>
                                        <h3>Rendimento</h3>
                                        <i class="bi bi-info-circle"></i>
                                    </div>

                                    <div className='form-btns-select'>
                                        <button className='btn-active btn-bruto'><i class="bi bi-check-lg"></i>Bruto</button>
                                        <button className='btn-liquido'>Liquido</button>
                                    </div>
                                </div>
                                
                                <div className='indexacao-form'>
                                    <div className='form-select-title'>
                                        <h3>Tipos de indexacao</h3>
                                        <i class="bi bi-info-circle"></i>
                                    </div>

                                    <div className='form-btns-select'>
                                        <button className='btn-pre'>PRÉ</button>
                                        <button className='btn-pos btn-active'><i class="bi bi-check-lg"></i>PÓS</button>
                                        <button className='btn-fixado'>FIXADO</button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    

                        <form className='input-form'>

                            <div className='input-info-1'>

                                <div className='input'>
                                    <label htmlFor="">Aporte Inicial</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                                <div className='input'>
                                    <label htmlFor="">Prazo (em meses)</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                                <div className='input'>
                                    <label htmlFor="">IPCA (ao ano)</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                            </div>

                            <div className='input-info-2'>

                                <div className='input'>
                                    <label htmlFor="">Aporte Mensal</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                                <div className='input'>
                                    <label htmlFor="">Rentabilidade</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                                <div className='input'>
                                    <label htmlFor="">CDI (ao ano)</label>
                                    <input type="text" />
                                    <span>isWrog</span>
                                </div>

                            </div>

                        </form>

                        <div className='btn-finals'>
                            <button className='clean-data-btn'>Limpar campos</button>
                            <button className='simulate-btn'>Simular</button>
                        </div>

                    </div>
                </div>

            </>
    )
}