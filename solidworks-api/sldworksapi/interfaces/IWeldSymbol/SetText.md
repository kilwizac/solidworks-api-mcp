---
type: method
interface: IWeldSymbol
member: SetText
returns: System.Boolean
parameters:
  -
    name: Top
    type: System.Boolean
    description: True to set the text in the portion of the symbol above the horizontal line, false to set the text in the portion of the symbol below the horizontal line
  -
    name: Left
    type: System.String
    description: Text to the left of the weld symbol
  -
    name: Symbol
    type: System.String
    description: Text representing the weld symbol (see Remarks )
  -
    name: Right
    type: System.String
    description: Text to the right of the weld symbol
  -
    name: Stagger
    type: System.String
    description: Text to the right of the stagger symbol (see Remarks )
  -
    name: Contour
    type: System.Int32
    description: Contour setting as defined in swWeldSymbolContourTypes_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - settext
  - iweldsymbol
  - weld
  - symbol
  - text
  - top
  - boolean
  - left
  - string
  - right
  - stagger
  - contour
  - int32
---

# IWeldSymbol.SetText

Sets the text and symbols in the upper or lower portion of the weld symbol.

## Signature

```csharp
System.Boolean SetText( 
   System.Boolean
Top
,
   System.String
Left
,
   System.String
Symbol
,
   System.String
Right
,
   System.String
Stagger
,
   System.Int32
Contour
)
```
## Parameters

- `Top` (System.Boolean): True to set the text in the portion of the symbol above the horizontal line, false to set the text in the portion of the symbol below the horizontal line
- `Left` (System.String): Text to the left of the weld symbol
- `Symbol` (System.String): Text representing the weld symbol (see Remarks )
- `Right` (System.String): Text to the right of the weld symbol
- `Stagger` (System.String): Text to the right of the stagger symbol (see Remarks )
- `Contour` (System.Int32): Contour setting as defined in swWeldSymbolContourTypes_e (see Remarks )

## Return Value

True if the text and symbols are set, false if not

## Remarks

To get the individual pieces of text for a weld symbol, use
IWeldSymbol::GetText
. To get the contour setting for a weld symbol, use
IWeldSymbol::GetContour
.
The stagger text that is specified is only visible if this option is enabled. See
IWeldSymbol::GetStagger
to see the current setting and
IWeldSymbol::SetStagger
to enable or disable that option.
A list of weld symbol names can be found in the text file
gtol.sym
,
, typically installed at
C:\ProgramData\SolidWorks\SolidWorks 20
nn
\
lang
\
english
. Specify Symbol with one of the currently supported ISO weld symbols:
BUTT
BUSQ
BUSV
BUSB
BUSVBR
BUSBR
BUSU
BUSJ
BACK
FILL
PLUG
SPOT
SEAM
SEAMC
JSPT
JSM

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)