---
type: method
interface: IMacroFeatureData
member: SetStringByName
returns: void
parameters:
  -
    name: ParamName
    type: System.String
    description: Name of the parameter
  -
    name: ParamValue
    type: System.String
    description: New string value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameterCount
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.IGetParameters
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
keywords:
  - setstringbyname
  - imacrofeaturedata
  - macro
  - feature
  - data
  - string
  - name
  - param
  - value
  - void
---

# IMacroFeatureData.SetStringByName

Sets a string value by parameter name.

## Signature

```csharp
void SetStringByName( 
   System.String
ParamName
,
   System.String
ParamValue
)
```
## Parameters

- `ParamName` (System.String): Name of the parameter
- `ParamValue` (System.String): New string value

## Return Value

Unknown.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`