---
type: property
interface: IMassProperty2
member: IncludeHiddenBodiesOrComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.SelectedItems
keywords:
  - includehiddenbodiesorcomponents
  - imassproperty2
  - mass
  - property2
  - include
  - hidden
  - bodies
  - components
  - boolean
readonly: null
---

# IMassProperty2.IncludeHiddenBodiesOrComponents

Gets or sets whether to include the mass properties of hidden bodies/components.

## Signature

```csharp
System.Boolean IncludeHiddenBodiesOrComponents {get; set;}
```
## Parameters

None.

## Return Value

True to include the mass properties of hidden bodies/components, false to not

## Remarks

After setting this property to true, be sure to call
IMassProperty2::Recalculate
before using the IMassProperty2 properties.

## See Also

- `IMassProperty2.SelectedItems`