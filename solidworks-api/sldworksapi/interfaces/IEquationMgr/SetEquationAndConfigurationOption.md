---
type: method
interface: IEquationMgr
member: SetEquationAndConfigurationOption
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
    name: ConfigNames
    type: System.Object
    description: Array of the names of the configurations to which to add this equation; valid only if WhichConfigurations is set to swInConfigurationOpts_e.swSpecifyConfiguration, in which case, include the name of the current configuration in this array
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.GetConfigurationOption
  - IEquationMgr.IAdd3
  - IEquationMgr.ISetEquationAndConfigurationOption
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - equation
  - iequationmgr
  - configurations
  - setequationandconfigurationoption
  - mgr
  - option
  - index
  - int32
  - string
  - which
  - config
  - names
  - object
  - add
  - modify
  - equations
  - vba
  - vb
  - net
---

# IEquationMgr.SetEquationAndConfigurationOption

Modifies the equation at the specified index for the specified configurations.

## Signature

```csharp
System.Int32 SetEquationAndConfigurationOption( 
   System.Int32
Index
,
   System.String
Equation
,
   System.Int32
WhichConfigurations
,
   System.Object
ConfigNames
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation to modify
- `Equation` (System.String): String containing the modified equation (see Remarks )
- `WhichConfigurations` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `ConfigNames` (System.Object): Array of the names of the configurations to which to add this equation; valid only if WhichConfigurations is set to swInConfigurationOpts_e.swSpecifyConfiguration, in which case, include the name of the current configuration in this array

## Return Value

Index of equation if successfully modified, -1 if error

## Remarks

This method modifies only equations added using
IEquationMgr::Add3
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

## Examples

- Add and Modify Equations (VBA) (Add_Equations_Example_VB.htm)
- Add and Modify Equations (VB.NET) (Add_Equations_Example_VBNET.htm)
- Add and Modify Equations (C#) (Add_Equations_Example_CSharp.htm)

## See Also

- `IEquationMgr.GetConfigurationOption`
- `IEquationMgr.IAdd3`
- `IEquationMgr.ISetEquationAndConfigurationOption`