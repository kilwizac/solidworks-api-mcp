---
type: method
interface: ICavityFeatureData
member: IGetComponents
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of design components
  -
    name: Comps
    type: Component2
    description: in-process, unmanaged C++: Pointer to an array of IComponent2 objects of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData.Components
  - ICavityFeatureData.ISetComponents
keywords:
  - igetcomponents
  - icavityfeaturedata
  - cavity
  - feature
  - data
  - components
  - count
  - int32
  - comps
  - component2
  - void
---

# ICavityFeatureData.IGetComponents

Gets the design components for this cavity feature.

## Signature

```csharp
void IGetComponents( 
   System.Int32
Count
,
   out Component2
Comps
)
```
## Parameters

- `Count` (System.Int32): Number of design components
- `Comps` (Component2): in-process, unmanaged C++: Pointer to an array of IComponent2 objects of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Call
ICavityFeatureData::GetComponentsCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICavityFeatureData.Components`
- `ICavityFeatureData.ISetComponents`