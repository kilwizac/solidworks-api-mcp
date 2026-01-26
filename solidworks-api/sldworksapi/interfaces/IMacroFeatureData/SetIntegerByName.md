---
type: method
interface: IMacroFeatureData
member: SetIntegerByName
returns: void
parameters:
  -
    name: ParamName
    type: System.String
    description: Name of the parameter
  -
    name: ParamValue
    type: System.Int32
    description: New integer value
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
  - IMacroFeatureData.SetStringByName
keywords:
  - setintegerbyname
  - imacrofeaturedata
  - macro
  - feature
  - data
  - integer
  - name
  - param
  - string
  - value
  - int32
  - void
---

# IMacroFeatureData.SetIntegerByName

Sets an integer value by parameter name.

## Signature

```csharp
void SetIntegerByName( 
   System.String
ParamName
,
   System.Int32
ParamValue
)
```
## Parameters

- `ParamName` (System.String): Name of the parameter
- `ParamValue` (System.Int32): New integer value

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
- `IMacroFeatureData.SetStringByName`