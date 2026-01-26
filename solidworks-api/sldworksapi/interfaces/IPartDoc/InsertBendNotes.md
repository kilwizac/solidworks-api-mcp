---
type: method
interface: IPartDoc
member: InsertBendNotes
returns: System.Object
parameters:
  -
    name: FlatPatternFeature
    type: System.Object
    description: IFeature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related: []
keywords:
  - insertbendnotes
  - ipartdoc
  - part
  - doc
  - insert
  - bend
  - notes
  - flat
  - pattern
  - feature
  - object
---

# IPartDoc.InsertBendNotes

Inserts bend notes for the specified flat-pattern feature of this sheet metal part.

## Signature

```csharp
System.Object InsertBendNotes( 
   System.Object
FlatPatternFeature
)
```
## Parameters

- `FlatPatternFeature` (System.Object): IFeature

## Return Value

Array of INote s