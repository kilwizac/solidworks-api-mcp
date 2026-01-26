---
type: method
interface: IModelDoc2
member: IInsertWeldSymbol3
returns: WeldSymbol
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.InsertWeldSymbol3
keywords:
  - weld
  - symbols
  - see
  - iweldsymbol
  - iinsertweldsymbol3
  - imodeldoc2
  - model
  - doc2
  - insert
  - symbol3
  - symbol
---

# IModelDoc2.IInsertWeldSymbol3

Inserts a weld symbol into the model.

## Signature

```csharp
WeldSymbol IInsertWeldSymbol3()
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

## See Also

- `IModelDoc2.InsertWeldSymbol3`