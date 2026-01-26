---
type: method
interface: IComponent2
member: GetBodies3
returns: System.Object
parameters:
  -
    name: BodyType
    type: System.Int32
    description: Type of body as defined by swBodyType_e
  -
    name: BodiesInfo
    type: System.Object
    description: Array of information about the returned bodies as defined in swBodyInfo_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IBody2.IsSheetMetal
  - IComponent2.EnumBodies2
  - IComponent2.GetBody
  - IComponent2.IGetBody
  - IPartDoc.GetBodies2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - components
  - icomponent2
  - getbodies3
  - component2
  - bodies3
  - body
  - type
  - int32
  - info
  - object
  - iview
  - getvisibledrawingcomponents
---

# IComponent2.GetBodies3

Gets the bodies in this component.

## Signature

```csharp
System.Object GetBodies3( 
   System.Int32
BodyType
,
   out System.Object
BodiesInfo
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined by swBodyType_e
- `BodiesInfo` (System.Object): Array of information about the returned bodies as defined in swBodyInfo_e

## Return Value

Array of bodies in the component

## Remarks

This method:
Only supports solid and surface bodies and part components,
May vary the order in which bodies are returned,
Supports lightweight components (the now obsolete IComponent2::GetBodies does not),
- and -
Returns an array in BodiesInfo containing information about bodies that indicates whether they are normal or user bodies. User bodies are original component bodies that have been modified in an assembly (e.g., a normal component body is cut in the assembly, resulting in two user component bodies). User bodies are not created for surface bodies.

## Examples

- IView::GetVisibleDrawingComponents (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView~GetVisibleDrawingComponents)

## See Also

- `IBody2.IsSheetMetal`
- `IComponent2.EnumBodies2`
- `IComponent2.GetBody`
- `IComponent2.IGetBody`
- `IPartDoc.GetBodies2`