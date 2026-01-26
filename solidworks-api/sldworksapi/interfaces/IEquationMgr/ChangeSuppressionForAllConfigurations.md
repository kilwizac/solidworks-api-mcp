---
type: method
interface: IEquationMgr
member: ChangeSuppressionForAllConfigurations
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the target equation
  -
    name: State
    type: System.Boolean
    description: True suppresses the equation, false unsuppresses it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.ChangeSuppressionForConfiguration
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.Status
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - equation
  - iequationmgr
  - configurations
  - changesuppressionforallconfigurations
  - mgr
  - change
  - suppression
  - all
  - index
  - int32
  - state
  - boolean
---

# IEquationMgr.ChangeSuppressionForAllConfigurations

Changes the suppression state of the specified equation in all configurations.

## Signature

```csharp
System.Int32 ChangeSuppressionForAllConfigurations( 
   System.Int32
Index
,
   System.Boolean
State
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the target equation
- `State` (System.Boolean): True suppresses the equation, false unsuppresses it

## Return Value

Index of the equation; -1 if error or if the equation was created in SOLIDWORKS 2014 or later

## See Also

- `IEquationMgr.ChangeSuppressionForConfiguration`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.Status`