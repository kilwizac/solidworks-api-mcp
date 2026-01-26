---
type: method
interface: IPartDoc
member: ICreateNewBody2
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related:
  - IPartDoc.CreateNewBody
keywords:
  - bodies
  - see
  - also
  - ibody2
  - create
  - knit
  - sew
  - icreatenewbody2
  - ipartdoc
  - part
  - doc
  - new
  - body2
  - imported
  - surface
  - body
  - sketch
---

# IPartDoc.ICreateNewBody2

Creates a new body to use for import sewing operations and returns it to the caller.

## Signature

```csharp
Body2 ICreateNewBody2()
```
## Parameters

None.

## Return Value

Body

## Remarks

The intention is that with a handle on such a (initially empty) body, appropriate construction methods (for example,
IBody2::CreateTrimmedSurface
) can be called that eventually amount to a non-trivial object.

## Examples

- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)

## See Also

- `IPartDoc.CreateNewBody`