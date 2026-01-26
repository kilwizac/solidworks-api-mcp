---
type: method
interface: IMacroFeatureData
member: GetParameters
returns: void
parameters:
  -
    name: ParamNames
    type: System.Object
    description: Array of parameter names
  -
    name: ParamTypes
    type: System.Object
    description: Array of parameter data types as defined in swMacroFeatureParamType_e
  -
    name: ParamValues
    type: System.Object
    description: Array of the parameter values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameterCount
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.IGetParameters
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetStringByName
keywords:
  - getparameters
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parameters
  - param
  - names
  - object
  - types
  - values
  - void
---

# IMacroFeatureData.GetParameters

Gets the user-defined parameters.

## Signature

```csharp
void GetParameters( 
   out System.Object
ParamNames
,
   out System.Object
ParamTypes
,
   out System.Object
ParamValues
)
```
## Parameters

- `ParamNames` (System.Object): Array of parameter names
- `ParamTypes` (System.Object): Array of parameter data types as defined in swMacroFeatureParamType_e
- `ParamValues` (System.Object): Array of the parameter values

## Return Value

Unknown.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetStringByName`