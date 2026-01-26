---
type: method
interface: ISldWorks
member: ArrangeWindows
returns: void
parameters:
  -
    name: Style
    type: System.Int32
    description: Type of arrangement where: 0 = Cascade 1 = Tile horizontally 2 = Tile vertically
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CreateNewWindow
keywords:
  - windows
  - cascade
  - tile
  - arrangewindows
  - isldworks
  - sld
  - works
  - arrange
  - style
  - int32
  - void
  - access
  - assembly
  - create
  - vba
---

# ISldWorks.ArrangeWindows

Arranges the open windows in SOLIDWORKS.

## Signature

```csharp
void ArrangeWindows( 
   System.Int32
Style
)
```
## Parameters

- `Style` (System.Int32): Type of arrangement where: 0 = Cascade 1 = Tile horizontally 2 = Tile vertically

## Return Value

Unknown.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Create and Arrange Windows (VBA) (Create_and_Arrange_Windows_Example_VB.htm)

## See Also

- `ISldWorks.CreateNewWindow`