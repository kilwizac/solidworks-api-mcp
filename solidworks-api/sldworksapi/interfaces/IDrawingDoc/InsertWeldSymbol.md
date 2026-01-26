---
type: method
interface: IDrawingDoc
member: InsertWeldSymbol
returns: void
parameters:
  -
    name: Dim1
    type: System.String
    description: First text value to the left of the symbol
  -
    name: Symbol
    type: System.String
    description: Weld symbol name (see Remarks )
  -
    name: Dim2
    type: System.String
    description: Text value to the right of the symbol
  -
    name: Symmetric
    type: System.Boolean
    description: True puts the symbol above and below the horizontal line
  -
    name: FieldWeld
    type: System.Boolean
    description: True puts a flag for field welding
  -
    name: ShowOtherSide
    type: System.Boolean
    description: True puts Dim1, Symbol, and Dim2 on the other side of the horizontal line
  -
    name: DashOnTop
    type: System.Boolean
    description: True puts the dash line on top
  -
    name: Peripheral
    type: System.Boolean
    description: True puts a peripheral symbol
  -
    name: HasProcess
    type: System.Boolean
    description: True uses ProcessValue
  -
    name: ProcessValue
    type: System.String
    description: Process value if HasProcess is set to True
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IWeldSymbol
keywords:
  - weld
  - symbols
  - see
  - iweldsymbol
  - insertweldsymbol
  - idrawingdoc
  - drawing
  - doc
  - insert
  - symbol
  - dim1
  - string
  - dim2
  - symmetric
  - boolean
  - field
  - show
  - other
  - side
  - dash
  - top
  - peripheral
  - has
  - process
  - value
  - void
---

# IDrawingDoc.InsertWeldSymbol

Creates a weld symbol located at the last edge selection.

## Signature

```csharp
void InsertWeldSymbol( 
   System.String
Dim1
,
   System.String
Symbol
,
   System.String
Dim2
,
   System.Boolean
Symmetric
,
   System.Boolean
FieldWeld
,
   System.Boolean
ShowOtherSide
,
   System.Boolean
DashOnTop
,
   System.Boolean
Peripheral
,
   System.Boolean
HasProcess
,
   System.String
ProcessValue
)
```
## Parameters

- `Dim1` (System.String): First text value to the left of the symbol
- `Symbol` (System.String): Weld symbol name (see Remarks )
- `Dim2` (System.String): Text value to the right of the symbol
- `Symmetric` (System.Boolean): True puts the symbol above and below the horizontal line
- `FieldWeld` (System.Boolean): True puts a flag for field welding
- `ShowOtherSide` (System.Boolean): True puts Dim1, Symbol, and Dim2 on the other side of the horizontal line
- `DashOnTop` (System.Boolean): True puts the dash line on top
- `Peripheral` (System.Boolean): True puts a peripheral symbol
- `HasProcess` (System.Boolean): True uses ProcessValue
- `ProcessValue` (System.String): Process value if HasProcess is set to True

## Return Value

Unknown.

## Remarks

Symbol specifies the weld symbol name. You can find a list of weld symbol names in
C:\ProgramData\SolidWorks\SolidWorks 20
nn
\
lang
\
english\gtol.sym
.
The format of Symbol is
<
Standard
-
Type
>
. For example, a JIS seam is
<JWELD-JSM>
, and an ISO seam is
<WELD-JSM>
. You must include the right- and left-angle brackets and separate
Standard
and
Type
with a hyphen.

## See Also

- `IWeldSymbol`