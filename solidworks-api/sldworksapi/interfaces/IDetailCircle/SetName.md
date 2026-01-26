---
type: method
interface: IDetailCircle
member: SetName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of this detail circle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetName
keywords:
  - setname
  - idetailcircle
  - detail
  - circle
  - name
  - string
  - boolean
---

# IDetailCircle.SetName

Sets the name of this detail circle, as displayed in the FeatureManager design tree.

## Signature

```csharp
System.Boolean SetName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of this detail circle

## Return Value

True if setting the detail circle name is successful, false if not

## Remarks

If setting the name of a feature, then the new name must be unique in the FeatureManager design tree. If the name is not unique, then the name is not changed. Also, the name cannot contain any of the SOLIDWORKS reserved special characters.

## See Also

- `IDetailCircle.GetName`