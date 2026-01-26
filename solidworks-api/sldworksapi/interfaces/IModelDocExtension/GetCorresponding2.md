---
type: method
interface: IModelDocExtension
member: GetCorresponding2
returns: System.Object
parameters:
  -
    name: InputObject
    type: System.Object
    description: Object in this drawing view or assembly (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCorrespondingEntity2
keywords:
  - corresponding
  - objects
  - getcorresponding2
  - imodeldocextension
  - model
  - doc
  - extension
  - corresponding2
  - input
  - object
  - entities
  - between
  - parts
  - drawing
  - views
  - vba
  - vb
  - net
---

# IModelDocExtension.GetCorresponding2

Gets the object in the underlying part or subassembly document that corresponds to the specified input object in this drawing view or assembly.

## Signature

```csharp
System.Object GetCorresponding2( 
   System.Object
InputObject
)
```
## Parameters

- `InputObject` (System.Object): Object in this drawing view or assembly (see Remarks )

## Return Value

Corresponding object in the underlying part or subassembly; null or Nothing if none found (see Remarks )

## Remarks

InputObject can be any object assigned a persistent reference ID; for example, a
IFeature
,
IAnnotation
or
ISketch
object.
To get the assembly object corresponding to a given component object, use
IComponent2::GetCorresponding
.
To get the drawing view object corresponding to a given part or assembly object, use
IView::GetCorresponding
.

## Examples

- Get Corresponding Entities Between Parts and Drawing Views (VBA) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VB.htm)
- Get Corresponding Entities Between Parts and Drawing Views (VB.NET) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VBNET.htm)
- Get Corresponding Entities Between Parts and Drawing Views (C#) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetCorrespondingEntity2`