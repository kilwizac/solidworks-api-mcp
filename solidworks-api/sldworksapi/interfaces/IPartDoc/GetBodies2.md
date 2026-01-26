---
type: method
interface: IPartDoc
member: GetBodies2
returns: System.Object
parameters:
  -
    name: BodyType
    type: System.Int32
    description: Type of body as defined in swBodyType_e
  -
    name: BVisibleOnly
    type: System.Boolean
    description: True gets only the visible bodies, false gets all of the bodies in the part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IBodyFolder.GetBodies
  - IBodyFolder.IGetBodies
  - IComponent2.GetBodies2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - parts
  - ipartdoc
  - getbodies2
  - part
  - doc
  - bodies2
  - body
  - type
  - int32
  - visible
  - only
  - boolean
  - object
  - traverse
  - view
  - vb
  - net
  - vba
---

# IPartDoc.GetBodies2

Gets the bodies in this part.

## Signature

```csharp
System.Object GetBodies2( 
   System.Int32
BodyType
,
   System.Boolean
BVisibleOnly
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined in swBodyType_e
- `BVisibleOnly` (System.Boolean): True gets only the visible bodies, false gets all of the bodies in the part

## Return Value

Array of bodies

## Remarks

This method:
Only supports solid and sheet (surface) body types.
May vary the order in which bodies are returned.

## Examples

- Get Bodies (C++) (Get_Bodies_Example_CPlusPlus_COM.htm)
- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Set Body for View (C#) (Set_Body_for_View_Example_CSharp.htm)
- Set Body for Part (VB.NET) (Set_Body_for_View_Example_VBNET.htm)
- Set Body for Part (VBA) (Set_Body_for_View_Example_VB.htm)

## See Also

- `IBodyFolder.GetBodies`
- `IBodyFolder.IGetBodies`
- `IComponent2.GetBodies2`