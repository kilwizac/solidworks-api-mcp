---
type: property
interface: IBomFeature
member: Configuration
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - bill
  - materials
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - ibomfeature
  - bom
  - feature
  - string
readonly: null
---

# IBomFeature.Configuration

Gets or sets the name of configuration for this BOM table.

## Signature

```csharp
System.String Configuration {get; set;}
```
## Parameters

None.

## Return Value

Name of the configuration shown in the BOM table

## Remarks

You can only use this property for BOM tables that show one configuration at a time, such as for parts and indented subassembly style BOM tables.
You cannot use this property for top-level only BOM tables because information on multiple configurations can be shown at once in that style table. In that scenario, getting this property returns an empty string and setting the property has no effect. Use the
IBomFeature::GetConfigurationCount
,
IBomFeature::GetConfigurations
,
IBomFeature::IGetConfigurations
,
IBomFeature::SetConfigurations
, or
IBomFeature::ISetConfigurations
for that type of table.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)