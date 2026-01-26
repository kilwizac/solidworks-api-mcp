---
type: method
interface: IModelDoc2
member: SetBendState
returns: System.Int32
parameters:
  -
    name: BendState
    type: System.Int32
    description: Sheet metal state to set in this part as defined in swSMBendState_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetBendState
keywords:
  - bends
  - state
  - setbendstate
  - imodeldoc2
  - model
  - doc2
  - bend
  - int32
  - flatten
  - sheet
  - metal
  - part
  - vba
---

# IModelDoc2.SetBendState

Sets the bend state of a sheet metal part.

## Signature

```csharp
System.Int32 SetBendState( 
   System.Int32
BendState
)
```
## Parameters

- `BendState` (System.Int32): Sheet metal state to set in this part as defined in swSMBendState_e

## Return Value

Status of the set operation as defined in swSMCommandStatus_e (see Remarks )

## Remarks

This method only works for old-style sheet metal parts or non-sheet metal parts converted to sheet metal parts. To set the bend state on new-style sheet metal parts (i.e., those that have a base flange as their first feature), suppress and unsuppress the flat-pattern feature.
If editing a part with bend information in the context of the assembly (see
IAssemblyDoc::EditPart2
), the bend state for that part will be set.
If this method is executed on...
Then...
Part without bend information
The part is not affected, and retval is set to swSMErrorNotASheetMetalPart
Assembly
The assembly is not affected, and retval is set to swSMErrorNotAPart
NOTE:
In both of these cases, status is S_false for the COM version of this method.

## Examples

- Flatten Sheet Metal Part (VBA) (Flatten_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IModelDoc2.GetBendState`