---
type: method
interface: IDisplayDimension
member: SetExtensionLineAsCenterline
returns: System.Boolean
parameters:
  -
    name: ExtIndex
    type: System.Int16
    description: Index of extension line to set
  -
    name: Centerline
    type: System.Boolean
    description: True to make extension line a centerline, false to not
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
  - setextensionlineascenterline
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

# IDisplayDimension.SetExtensionLineAsCenterline

Sets whether the specified extension line is a centerline.

## Signature

```csharp
System.Boolean SetExtensionLineAsCenterline( 
   System.Int16
ExtIndex
,
   System.Boolean
Centerline
)
```
## Parameters

- `ExtIndex` (System.Int16): Index of extension line to set
- `Centerline` (System.Boolean): True to make extension line a centerline, false to not

## Return Value

True if successful, false if not