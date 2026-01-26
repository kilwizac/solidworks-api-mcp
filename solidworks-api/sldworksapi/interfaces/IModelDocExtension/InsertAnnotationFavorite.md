---
type: method
interface: IModelDocExtension
member: InsertAnnotationFavorite
returns: Annotation
parameters:
  -
    name: BstrFileName
    type: System.String
    description: Path and filename of favorites file
  -
    name: X
    type: System.Double
    description: x coordinate where to insert the annotations
  -
    name: Y
    type: System.Double
    description: y coordinate where to insert the annotation s
  -
    name: Z
    type: System.Double
    description: z coordinate where to insert the annotation s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related: []
keywords:
  - annotation
  - see
  - also
  - iannotation
  - favorites
  - geometric
  - tolerancing
  - igtol
  - insertannotationfavorite
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - favorite
  - bstr
  - file
  - name
  - string
  - double
---

# IModelDocExtension.InsertAnnotationFavorite

Inserts annotations from the specified favorite file at the specified location.

## Signature

```csharp
Annotation InsertAnnotationFavorite( 
   System.String
BstrFileName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `BstrFileName` (System.String): Path and filename of favorites file
- `X` (System.Double): x coordinate where to insert the annotations
- `Y` (System.Double): y coordinate where to insert the annotation s
- `Z` (System.Double): z coordinate where to insert the annotation s

## Return Value

Annotation