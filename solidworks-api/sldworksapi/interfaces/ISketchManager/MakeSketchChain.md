---
type: method
interface: ISketchManager
member: MakeSketchChain
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - relation
  - path
  - sketch
  - see
  - also
  - isketch
  - makesketchchain
  - isketchmanager
  - manager
  - make
  - chain
  - boolean
  - create
  - vba
  - vb
  - net
---

# ISketchManager.MakeSketchChain

Creates a sketch path using the selected entities.

## Signature

```csharp
System.Boolean MakeSketchChain()
```
## Parameters

None.

## Return Value

True if the a sketch path is created, false if not

## Remarks

This method is not valid:
unless a sketch is in edit mode.
for 3D sketches.

## Examples

- Create Sketch Path (VBA) (Create_Sketch_Path_Example_VB.htm)
- Create Sketch Path (VB.NET) (Create_Sketch_Path_Example_VBNET.htm)
- Create Sketch Path (C#) (Create_Sketch_Path_Example_CSharp.htm)