---
type: method
interface: IModelDoc2
member: InsertWeldSymbol3
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - weld
  - symbols
  - see
  - iweldsymbol
  - insertweldsymbol3
  - imodeldoc2
  - model
  - doc2
  - insert
  - symbol3
  - object
  - symbol
  - example
  - vba
  - vb
  - net
---

# IModelDoc2.InsertWeldSymbol3

Inserts a weld symbol into the model.

## Signature

```csharp
System.Object InsertWeldSymbol3()
```
## Parameters

None.

## Return Value

Newly created weld symbol

## Remarks

To use this method, insert the weld symbol into the model and then manipulate the properties and methods on the
IWeldSymbol
object.
A list of weld symbol names can be found in
C:\ProgramData\SolidWorks\SolidWorks 20
nn
\
lang
\
english\gtol.sym
.
The currently supported list of ISO weld symbols is:
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

- Insert Weld Symbol Example (VBA) (Insert_Weld_Symbol_Example_VB.htm)
- Insert Weld Symbol Example (VB.NET) (Insert_Weld_Symbol_Example_VBNET.htm)
- Insert Weld Symbol Example (C#) (Insert_Weld_Symbol_Example_CSharp.htm)