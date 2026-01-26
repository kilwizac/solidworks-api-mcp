---
type: method
interface: IAssemblyDoc
member: GetVisibleComponentsInViewCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - getvisiblecomponentsinviewcount
  - iassemblydoc
  - assembly
  - doc
  - visible
  - components
  - view
  - count
  - int32
---

# IAssemblyDoc.GetVisibleComponentsInViewCount

Gets the number of visible components in this assembly.

## Signature

```csharp
System.Int32 GetVisibleComponentsInViewCount()
```
## Parameters

None.

## Return Value

Number of visible components in this assembly

## Remarks

Call this method before calling
IAssembly_Doc::IGetVisibleComponentsInView
.