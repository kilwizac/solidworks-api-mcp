---
type: method
interface: IMacroFeatureData
member: GetDoubleByName
returns: void
parameters:
  -
    name: ParamName
    type: System.String
    description: Name of the parameter
  -
    name: ParamValue
    type: System.Double
    description: Double value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameterCount
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.IGetParameters
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetParameters
  - IMacroFeatureData.SetStringByName
keywords:
  - getdoublebyname
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

# IMacroFeatureData.GetDoubleByName

Gets a double value by parameter name.

## Signature

```csharp
void GetDoubleByName( 
   System.String
ParamName
,
   out System.Double
ParamValue
)
```
## Parameters

- `ParamName` (System.String): Name of the parameter
- `ParamValue` (System.Double): Double value

## Return Value

Unknown.

## See Also

- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetParameters`
- `IMacroFeatureData.SetStringByName`