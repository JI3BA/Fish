import '../../styles/Contacts.css'

export const Contacts = () => {
    return(
        <div className="contacts">
            <div className="contacts__container wrapper">
                <h1 className="title__component contacts__title">Contacts</h1>
                <div className="content">
                    <div className="map"></div>
                    <div className="info">
                        <p className="info__text info__text--address"><span className='info__text--title'>Address:</span> XXXXXXXXXXX</p>
                        <p className="info__text info__text--phone"><span className='info__text--title'>Phone:</span> XXX-(XX)-XXX-XX-XX</p>
                        <p className="info__text info__text--email"><span className='info__text--title'>Email:</span> XXXXXXXX-XXXXXX@XXXXX.XXX</p>
                        <p className="info__text info__text--owner"><span className='info__text--title'>Owner:</span> XXXXXXX XXXXXXXXX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}