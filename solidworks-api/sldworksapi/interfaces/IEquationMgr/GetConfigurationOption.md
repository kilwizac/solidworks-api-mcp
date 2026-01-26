---
type: method
interface: IEquationMgr
member: GetConfigurationOption
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of equation for which to get the configuration option
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Add3
  - IEquationMgr.Equation
  - IEquationMgr.IAdd3
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - equation
  - iequationmgr
  - configurations
  - getconfigurationoption
  - mgr
  - option
  - index
  - int32
---

# IEquationMgr.GetConfigurationOption

Gets the configuration option for the equation at the specified index.

## Signature

```csharp
System.Int32 GetConfigurationOption( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of equation for which to get the configuration option

## Return Value

Configuration option as defined in swInConfigurationOpts_e

## Remarks

This method only works for documents created in SOLIDWORKS 2014 or later.

## See Also

- `IEquationMgr.Add3`
- `IEquationMgr.Equation`
- `IEquationMgr.IAdd3`