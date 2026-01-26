---
type: method
interface: IModelViewManager
member: CreateManipulator
returns: Manipulator
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of manipulator to create as defined by swManipulatorType_e
  -
    name: PHandler
    type: System.Object
    description: Manipulator handler object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - manipulator
  - see
  - also
  - imanipulator
  - create
  - createmanipulator
  - imodelviewmanager
  - model
  - view
  - manager
  - type
  - int32
  - handler
  - object
  - triad
  - vba
  - vb
  - net
  - drag
  - arrow
---

# IModelViewManager.CreateManipulator

Creates a manipulator, which is similar to the triad in the SOLIDWORKS Design user interface.

## Signature

```csharp
Manipulator CreateManipulator( 
   System.Int32
Type
,
   System.Object
PHandler
)
```
## Parameters

- `Type` (System.Int32): Type of manipulator to create as defined by swManipulatorType_e
- `PHandler` (System.Object): Manipulator handler object

## Return Value

Manipulator

## Remarks

If you move a manipulator far away from the model and then zoom-to-fit the model, the manipulator is not seen because it is not included in the clipping region.
See
Manipulators
for details.

## Examples

- Create Triad Manipulator (VBA) (Create_Triad_Manipulator_Example_VB.htm)
- Create Triad Manipulator (VB.NET) (Create_Triad_Manipulator_Example_VBNET.htm)
- Create Triad Manipulator (C#) (Create_Triad_Manipulator_Example_CSharp.htm)
- Create Drag Arrow Manipulator (C#) (Create_Drag_Arrow_Manipulator_Example_CSharp.htm)
- Create Drag Arrow Manipulator (VB.NET) (Create_Drag_Arrow_Manipulator_Example_VBNET.htm)
- Create Drag Arrow Manipulator (VBA) (Create_Drag_Arrow_Manipulator_Example_VB.htm)