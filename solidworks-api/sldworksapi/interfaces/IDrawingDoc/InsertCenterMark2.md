---
type: method
interface: IDrawingDoc
member: InsertCenterMark2
returns: CenterMark
parameters:
  -
    name: Style
    type: System.Int32
    description: Style as defined in swCenterMarkStyle_e
  -
    name: Propagate
    type: System.Boolean
    description: True if the center mark should propagate throughout the pattern, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - insertcentermark2
  - idrawingdoc
  - drawing
  - doc
  - insert
  - center
  - mark2
  - style
  - int32
  - propagate
  - boolean
  - mark
---

# IDrawingDoc.InsertCenterMark2

Obsolete. Superseded by IDrawingDoc::InsertCenterMark3.

## Signature

```csharp
CenterMark InsertCenterMark2( 
   System.Int32
Style
,
   System.Boolean
Propagate
)
```
## Parameters

- `Style` (System.Int32): Style as defined in swCenterMarkStyle_e
- `Propagate` (System.Boolean): True if the center mark should propagate throughout the pattern, false if not

## Return Value

Pointer to the centermark object