---
type: method
interface: IEquationMgr
member: ChangeSuppressionForConfiguration
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the target equation
  -
    name: ConfigName
    type: System.String
    description: Configuration in which to supress the equation is (Nothing or null for the current configuration)
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
  - IEquationMgr.ChangeSuppressionForAllConfigurations
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
  - changesuppressionforconfiguration
  - mgr
  - change
  - suppression
  - index
  - int32
  - config
  - name
  - string
  - state
  - boolean
---

# IEquationMgr.ChangeSuppressionForConfiguration

Changes the suppression state of an equation in the specified configuration.

## Signature

```csharp
System.Int32 ChangeSuppressionForConfiguration( 
   System.Int32
Index
,
   System.String
ConfigName
,
   System.Boolean
State
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the target equation
- `ConfigName` (System.String): Configuration in which to supress the equation is (Nothing or null for the current configuration)
- `State` (System.Boolean): True suppresses the equation, false unsuppresses it

## Return Value

Index of the equation; -1 if error of if the equation is created in SOLIDWORKS 2014 or later

## See Also

- `IEquationMgr.ChangeSuppressionForAllConfigurations`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.Status`