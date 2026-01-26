---
type: property
interface: IDocumentSpecification
member: Silent
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDocumentSpecification.AutoRepair
  - IDocumentSpecification.CriticalDataRepair
keywords:
  - silent
  - idocumentspecification
  - document
  - specification
  - boolean
  - whether
  - components
  - are
  - loaded
  - vb
  - net
  - vba
  - open
  - assembly
readonly: null
---

# IDocumentSpecification.Silent

Gets or sets whether to open the model document silently.

## Signature

```csharp
System.Boolean Silent {get; set;}
```
## Parameters

None.

## Return Value

True to open the model document silently, false to not

## Remarks

The software uses the last-displayed configuration if it discovers missing configurations or component references. No warnings or errors display if this property is set to true.

## Examples

- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Loaded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)
- Open Assembly Document (C#) (Open_Assembly_Document_Example_CSharp.htm)
- Open Assembly Document (VB.NET) (Open_Assembly_Document_Example_VBNET.htm)
- Open Assembly Document (VBA) (Open_Assembly_Document_Example_VB.htm)

## See Also

- `IDocumentSpecification.AutoRepair`
- `IDocumentSpecification.CriticalDataRepair`