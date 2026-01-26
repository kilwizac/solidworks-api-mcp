---
type: method
interface: IDrawingDoc
member: CreateBreakOutSection
returns: System.Boolean
parameters:
  -
    name: Depth
    type: System.Double
    description: Depth of the broken-out section
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - broken
  - out
  - sections
  - section
  - views
  - see
  - also
  - idrsection
  - createbreakoutsection
  - idrawingdoc
  - drawing
  - doc
  - create
  - break
  - depth
  - double
  - boolean
  - vba
  - vb
  - net
---

# IDrawingDoc.CreateBreakOutSection

Creates a broken-out section in a drawing document.

## Signature

```csharp
System.Boolean CreateBreakOutSection( 
   System.Double
Depth
)
```
## Parameters

- `Depth` (System.Double): Depth of the broken-out section

## Return Value

True if the broken-out section was created, false if not

## Examples

- Create Broken-Out Section (VBA) (Create_BreakOut_Section_Example_VB.htm)
- Create Broken-Out Section (VB.NET) (Create_BreakOut_Section_Example_VBNET.htm)
- Create Broken-Out Section (C#) (Create_BreakOut_Section_Example_CSharp.htm)

## See Also

- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.ICreateSectionViewAt4`