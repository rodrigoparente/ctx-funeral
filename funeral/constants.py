# Django Imports
from django.utils.translation import ugettext_lazy as _

PRIMARY = 'P'
SECONDARY = 'S'
PRIMARY_SECONDARY = 'PS'
NOT_MENTIONED = 'MS'

BURIAL = (
    (PRIMARY, _('Primário')),
    (SECONDARY, _('Secundário')),
    (PRIMARY_SECONDARY, _('Primário e Secundário')),
    (NOT_MENTIONED, _('Não Mencionado'))
)

ACRE = 'AC'
ALAGOAS = 'AL'
AMAPA = 'AP'
AMAZONAS = 'AM'
BAHIA = 'BA'
CEARA = 'CE'
ESPIRITO_SANTO = 'ES'
GOIAS = 'GO'
MARANHAO = 'MA'
MATO_GROSSO = 'MT'
MATO_GROSSO_SUL = 'MS'
MINAS_GERAIS = 'MG'
PARA = 'PA'
PARAIBA = 'PB'
PARANA = 'PR'
PERNAMBUCO = 'PE'
PIAUI = 'PI'
RIO_JANEIRO = 'RJ'
RIO_GRANDE_NORTE = 'RN'
RIO_GRANDE_SUL = 'RS'
RONDONIA = 'RO'
RORAIMA = 'RR'
SANTA_CATARINA = 'SC'
SAO_PAULO = 'SP'
SERGIPE = 'SE'
TOCANTINS = 'TO'
DISTRITO_FEDERAL = 'DF'

DISTRICTS = (
    (ACRE, _('Acre')),
    (ALAGOAS, _('Alagoas')),
    (AMAPA, _('Amapa')),
    (AMAZONAS, _('Amazonas')),
    (BAHIA, _('Bahia')),
    (CEARA, _('Ceará')),
    (ESPIRITO_SANTO, _('Espirito Santo')),
    (GOIAS, _('Goiás')),
    (MARANHAO, _('Maranhão')),
    (MATO_GROSSO, _('Mato Grosso')),
    (MATO_GROSSO_SUL, _('Mato Grosso do Sul')),
    (MINAS_GERAIS, _('Minas Gerais')),
    (PARA, _('Pará')),
    (PARAIBA, _('Paraíba')),
    (PARANA, _('Paraná')),
    (PERNAMBUCO, _('Pernambuco')),
    (PIAUI, _('Piauí')),
    (RIO_JANEIRO, _('Rio de Janeiro')),
    (RIO_GRANDE_NORTE, _('Rio Grande do Norte')),
    (RIO_GRANDE_SUL, _('Rio Grande do Sul')),
    (RONDONIA, _('Rondônia')),
    (RORAIMA, _('Roraima')),
    (SANTA_CATARINA, _('Santa Catarina')),
    (SAO_PAULO, _('São Paulo')),
    (SERGIPE, _('Sergipe')),
    (TOCANTINS, _('Tocantins')),
    (DISTRITO_FEDERAL, _('Distrito Federal'))
)