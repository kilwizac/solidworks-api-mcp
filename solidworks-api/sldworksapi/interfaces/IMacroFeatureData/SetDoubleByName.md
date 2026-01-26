---
type: method
interface: IMacroFeatureData
member: SetDoubleByName
returns: void
parameters:
  -
    name: ParamName
    type: System.String
    description: Name of the parameter
  -
    name: ParamValue
    type: System.Double
    description: New double value
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
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetStringByName
keywords:
  - setdoublebyname
  - imacrofeaturedata
  - macro
  - feature
  - data
  - double
  - name
  - param
  - string
  - value
  - void
---

# IMacroFeatureData.SetDoubleByName

Sets a double value by parameter name for the macro feature.

## Signature

```csharp
void SetDoubleByName( 
   System.String
ParamName
,
   System.Double
ParamValue
)
```
## Parameters

- `ParamName` (System.String): Name of the parameter
- `ParamValue` (System.Double): New double value

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
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetStringByName`