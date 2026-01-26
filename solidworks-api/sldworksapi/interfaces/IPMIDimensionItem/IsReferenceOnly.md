---
type: method
interface: IPMIDimensionItem
member: IsReferenceOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - isreferenceonly
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - reference
  - only
  - boolean
---

# IPMIDimensionItem.IsReferenceOnly

Gets whether this PMI dimension is reference only.

## Signature

```csharp
System.Boolean IsReferenceOnly()
```
## Parameters

None.

## Return Value

True if this PMI dimension is reference-only, false if not

## Remarks

If this method returns true, then this dimension item is used for information purposes only. It does not govern production or inspection operations.