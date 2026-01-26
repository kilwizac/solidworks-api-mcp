---
type: method
interface: IDisplayDimension
member: GetExtensionLineAsCenterline
returns: System.Boolean
parameters:
  -
    name: ExtIndex
    type: System.Int16
    description: Index of extension line
  -
    name: Centerline
    type: System.Boolean
    description: True if the extension line is a centerline, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - getextensionlineascenterline
  - idisplaydimension
  - display
  - extension
  - line
  - centerline
  - ext
  - index
  - int16
  - boolean
---

# IDisplayDimension.GetExtensionLineAsCenterline

Gets whether the specified extension line is a centerline.

## Signature

```csharp
System.Boolean GetExtensionLineAsCenterline( 
   System.Int16
ExtIndex
,
   out System.Boolean
Centerline
)
```
## Parameters

- `ExtIndex` (System.Int16): Index of extension line
- `Centerline` (System.Boolean): True if the extension line is a centerline, false if not

## Return Value

True if successful, false if not