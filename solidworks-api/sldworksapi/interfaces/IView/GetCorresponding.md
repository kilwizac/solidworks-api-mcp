---
type: method
interface: IView
member: GetCorresponding
returns: System.Object
parameters:
  -
    name: InputObject
    type: System.Object
    description: Pointer to the Dispatch object in a part or assembly (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCorrespondingEntity
keywords:
  - corresponding
  - objects
  - getcorresponding
  - iview
  - view
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

# IView.GetCorresponding

Gets the object in this drawing view that corresponds to the specified part or assembly object.

## Signature

```csharp
System.Object GetCorresponding( 
   System.Object
InputObject
)
```
## Parameters

- `InputObject` (System.Object): Pointer to the Dispatch object in a part or assembly (see Remarks )

## Return Value

Pointer to the corresponding object in this drawing view; null or Nothing if none found

## Remarks

InputObject can be any object assigned a persistent reference or object ID; for example,
IAnnotation
,
IFeature
,
ISketch
,
ISketchSegment
, etc.
Annotation objects will be found only if they were previously imported into this drawing view.
Use
IModelDocExtension::GetCorresponding2
to get the part or assembly object that corresponds to an object in a drawing view.

## Examples

- Get Corresponding Entities Between Parts and Drawing Views (VBA) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VB.htm)
- Get Corresponding Entities Between Parts and Drawing Views (VB.NET) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VBNET.htm)
- Get Corresponding Entities Between Parts and Drawing Views (C#) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_CSharp.htm)

## See Also

- `IView.GetCorrespondingEntity`