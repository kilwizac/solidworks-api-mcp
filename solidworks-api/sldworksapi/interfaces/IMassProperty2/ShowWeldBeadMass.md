---
type: property
interface: IMassProperty2
member: ShowWeldBeadMass
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - showweldbeadmass
  - imassproperty2
  - mass
  - property2
  - show
  - weld
  - bead
  - boolean
readonly: null
---

# IMassProperty2.ShowWeldBeadMass

Gets or sets whether to calculate weld bead mass.

## Signature

```csharp
System.Boolean ShowWeldBeadMass {get; set;}
```
## Parameters

None.

## Return Value

True to calculate weld bead mass, false to not

## Remarks

After setting this property to true, you can use
IMassProperty2::WeldBeadMass
.