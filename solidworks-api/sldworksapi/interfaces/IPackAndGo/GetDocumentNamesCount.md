---
type: method
interface: IPackAndGo
member: GetDocumentNamesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getdocumentnamescount
  - ipackandgo
  - pack
  - go
  - document
  - names
  - count
  - int32
  - assembly
  - vb
  - net
  - vba
---

# IPackAndGo.GetDocumentNamesCount

Gets the number of documents comprising the model for Pack and Go.

## Signature

```csharp
System.Int32 GetDocumentNamesCount()
```
## Parameters

None.

## Return Value

Number of documents comprising the model

## Remarks

Call this method before calling
IPackAndGo::IGetDocumentNames
and
IPackAndGo::IGetDocumentSaveToNames
to determine the size of the array for each method.

## Examples

- Pack and Go an Assembly (C#) (Pack_and_Go_an_Assembly_Example_CSharp.htm)
- Pack and Go an Assembly (VB.NET) (Pack_and_Go_an_Assembly_Example_VBNET.htm)
- Pack and Go an Assembly (VBA) (Pack_and_Go_an_Assembly_Example_VB.htm)