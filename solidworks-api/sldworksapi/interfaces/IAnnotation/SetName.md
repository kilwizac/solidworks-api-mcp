---
type: method
interface: IAnnotation
member: SetName
returns: System.Boolean
parameters:
  -
    name: NameIn
    type: System.String
    description: New and unique name for this annotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetName
keywords:
  - annotation
  - see
  - also
  - iannotation
  - name
  - setname
  - string
  - boolean
  - note
  - vba
---

# IAnnotation.SetName

Sets the name of this annotation.

## Signature

```csharp
System.Boolean SetName( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): New and unique name for this annotation

## Return Value

True if the name was successfully changed, false if the name was not successfully changed

## Remarks

This method verifies that the name is unique before attempting to set the name.

## Examples

- Get and Set Name of Note (VBA) (Get_and_Set_Names_of_Note_Example_VB.htm)

## See Also

- `IAnnotation.GetName`