---
type: property
interface: IConfiguration
member: BOMPartNoSource
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related:
  - IConfiguration.Name
  - IConfiguration.UseAlternateNameInBOM
keywords:
  - bill
  - materials
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - part
  - numbers
  - bompartnosource
  - bom
  - no
  - source
  - int32
  - change
  - properties
  - vba
readonly: null
---

# IConfiguration.BOMPartNoSource

Gets or sets the source of the part number used in the BOM table.

## Signature

```csharp
System.Int32 BOMPartNoSource {get; set;}
```
## Parameters

None.

## Return Value

Source of part number as defined in swBOMPartNumberSource_e EndOLEPropertyRow

## Remarks

If you specify this property with anything other than swBOMPartNumberSource_e.swBOMPartNumber_UserSpecified, then
IConfiguration::AlternateName
is set to an empty string.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)

## See Also

- `IConfiguration.Name`
- `IConfiguration.UseAlternateNameInBOM`