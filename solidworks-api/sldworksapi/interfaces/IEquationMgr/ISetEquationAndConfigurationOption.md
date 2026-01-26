---
type: method
interface: IEquationMgr
member: ISetEquationAndConfigurationOption
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the equation to modify
  -
    name: Equation
    type: System.String
    description: String containing the modified equation (see Remarks )
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: ConfigCount
    type: System.Int32
    description: Number of names in ConfigNames array
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
  - IEquationMgr.GetConfigurationOption
  - IEquationMgr.SetEquationAndConfigurationOption
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - equation
  - iequationmgr
  - configurations
  - isetequationandconfigurationoption
  - mgr
  - option
  - index
  - int32
  - string
  - which
  - config
  - count
  - names
---

# IEquationMgr.ISetEquationAndConfigurationOption

Modifies the equation at the specified index for the specified configurations.

## Signature

```csharp
System.Int32 ISetEquationAndConfigurationOption( 
   System.Int32
Index
,
   System.String
Equation
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

- `Index` (System.Int32): 0-based index of the equation to modify
- `Equation` (System.String): String containing the modified equation (see Remarks )
- `WhichConfigurations` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `ConfigCount` (System.Int32): Number of names in ConfigNames array
- `ConfigNames` (System.String): in-process, in-process, unmanaged C++: Pointer to an array of strings containing configuration names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

0 if equation successfully added, -1 if error

## Remarks

This method modifies only equations added using
IEquationMgr::IAdd3
.
To add an equation using the SOLIDWORKS Design user interface, you must embed the names of dimensions and global variables in double quotes:
Global variable assignment:
"B" = 2
Component equation:
"N_SPOKES@CirPattern" = "BARLENGTH@Sketch2" /10
Dimension equation that uses the Visual Basic IIf function:
"D1@Extrude2" = (IIf("D1@Extrude3">20, 15, 6))+5
Dimension equation that sets a dimension to the current value:
"D1@Extrude2" =
Dimension equation that modifies the right-hand side of an already existing dimension equation:
"D1@Extrude2" = 0.05
NOTES:
To modify an equation:
you must specify Equation with the names of dimensions and global variables in double double quotes and the entire equation in double quotes. The examples for
IEquationMgr::Add3
show how to do this.
Global variables
cannot be set to current values using this method.
added directly to an assembly component's model, you must call
IAssemblyDoc::EditPart2
before calling this method.
If you change the active configuration, then you must call
IModelDoc2::GetEquationMgr
again.
If the model has just one configuration, then use
IEquationMgr::Equation
.

## See Also

- `IEquationMgr.GetConfigurationOption`
- `IEquationMgr.SetEquationAndConfigurationOption`