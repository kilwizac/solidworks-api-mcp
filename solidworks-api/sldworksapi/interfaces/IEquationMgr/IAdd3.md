---
type: method
interface: IEquationMgr
member: IAdd3
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the new equation (-1 places it at the end of the list)
  -
    name: Equation
    type: System.String
    description: String containing the equation (see Remarks )
  -
    name: Solve
    type: System.Boolean
    description: True to solve the equation immediately; false to solve it later (see Remarks )
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e (see Remarks )
  -
    name: ConfigCount
    type: System.Int32
    description: Number of names in the ConfigNames array
  -
    name: ConfigNames
    type: System.String
    description: in-process, in-process, unmanaged C++: Pointer to an array of strings containing configuration names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Delete
  - IEquationMgr.Disabled
  - IEquationMgr.Equation
  - IEquationMgr.GetConfigurationOption
  - IEquationMgr.GetCount
  - IEquationMgr.GetDisabledEquationCount
  - IEquationMgr.GlobalVariable
  - IEquationMgr.Status
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - add
  - evaluate
  - all
  - iif
  - iadd3
  - mgr
  - add3
  - index
  - int32
  - string
  - solve
  - boolean
  - which
  - configurations
  - config
  - count
  - names
---

# IEquationMgr.IAdd3

Adds an equation at the specified index for the specified configurations.

## Signature

```csharp
System.Int32 IAdd3( 
   System.Int32
Index
,
   System.String
Equation
,
   System.Boolean
Solve
,
   System.Int32
WhichConfigurations
,
   System.Int32
ConfigCount
,
   ref System.String
ConfigNames
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the new equation (-1 places it at the end of the list)
- `Equation` (System.String): String containing the equation (see Remarks )
- `Solve` (System.Boolean): True to solve the equation immediately; false to solve it later (see Remarks )
- `WhichConfigurations` (System.Int32): Configuration option as defined in swInConfigurationOpts_e (see Remarks )
- `ConfigCount` (System.Int32): Number of names in the ConfigNames array
- `ConfigNames` (System.String): in-process, in-process, unmanaged C++: Pointer to an array of strings containing configuration names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Index of the new equation, -1 if error

## Remarks

This method only works for parts having multple configurations created in SOLIDWORKS 2014 or later. Use this method to add dimension equations, component equations, or global variable assignments to various configurations of models. If you don't have multiple configurations, then call
IEquationMgr::Add2
, which does not support configurations and is slightly faster.
To add an equation using the SOLIDWORKS Design user interface, you must embed the names of dimensions and global variables in double quotes:
Global variable assignment:
"B" = 2
Component equation:
"N_SPOKES@CirPattern" = "BARLENGTH@Sketch2" /10
Dimension equation that uses the Visual Basic IIf function:
"D1@Extrude2" = (IIf("D1@Extrude3">20, 15, 6))+5
Dimension equation that sets a dimension to the current value:
"D1@Extrude2" =
NOTE:
To add an equation:
you must specify Equation with the names of dimensions and global variables in double double quotes and the entire equation in double quotes. See the Examples.
directly to an assembly component's model, you must call
IAssemblyDoc::EditPart2
before calling this method.
You can add a dimension equation whose left-hand side already exists, but only if the existing equation is suppressed. Adding the equation again unsuppresses it. See
IEquationMgr::ChangeSuppressionForAllConfigurations
and
IEquationMgr::ChangeSuppressionForConfiguration
.
Setting Solve to false delays evaluation of this equation, which enhances performance when there are many equations to solve. When Solve is set to false, the equation appears in the FeatureManager design tree only after calling
IEquationMgr::EvaluateAll
or
IModelDoc2::EditRebuild3
.
When adding global variable assignments and component equations, WhichConfigurations must be set to
swInConfigurationOpts_e
.swAllConfiguration.
If you add a global variable assignment that already exists, this method returns an error.
To modify an equation added by this method, call
IEquationMgr::ISetEquationAndConfigurationOption
.
When you add an equation, you are adding it to the list of relations. Thus, do not add an equation while traversing the equations in a model, because SOLIDWORKS could crash.

## See Also

- `IEquationMgr.Delete`
- `IEquationMgr.Disabled`
- `IEquationMgr.Equation`
- `IEquationMgr.GetConfigurationOption`
- `IEquationMgr.GetCount`
- `IEquationMgr.GetDisabledEquationCount`
- `IEquationMgr.GlobalVariable`
- `IEquationMgr.Status`