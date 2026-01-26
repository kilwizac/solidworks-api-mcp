---
type: property
interface: IDrSection
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayer
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - lines
  - layers
  - layer
  - ilayer
  - ilayermgr
  - interfaces
  - dr
  - string
readonly: null
---

# IDrSection.Layer

Gets or sets the name of the layer on which the section line lies.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Layer name

## Remarks

An empty string indicates no layer. If you set the layer to a layer name that does not exist, nothing happens.

## See Also

- `ILayer`