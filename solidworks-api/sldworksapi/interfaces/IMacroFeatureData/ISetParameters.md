---
type: method
interface: IMacroFeatureData
member: ISetParameters
returns: void
parameters:
  -
    name: ParamCount
    type: System.Int32
    description: Number of parameters
  -
    name: ParamNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of parameter names of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamTypes
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an arrayparameter data types of size ParamCount as defined in swMacroFeatureParamType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamValues
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array parameter values of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetParameters
  - IMacroFeatureData.SetStringByName
keywords:
  - isetparameters
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parameters
  - param
  - count
  - int32
  - names
  - string
  - types
  - values
  - void
---

# IMacroFeatureData.ISetParameters

Sets the user-defined parameters.

## Signature

```csharp
void ISetParameters( 
   System.Int32
ParamCount
,
   ref System.String
ParamNames
,
   ref System.Int32
ParamTypes
,
   ref System.String
ParamValues
)
```
## Parameters

- `ParamCount` (System.Int32): Number of parameters
- `ParamNames` (System.String): in-process, unmanaged C++: Pointer to an array of parameter names of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamTypes` (System.Int32): in-process, unmanaged C++: Pointer to an arrayparameter data types of size ParamCount as defined in swMacroFeatureParamType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamValues` (System.String): in-process, unmanaged C++: Pointer to an array parameter values of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetParameters`
- `IMacroFeatureData.SetStringByName`