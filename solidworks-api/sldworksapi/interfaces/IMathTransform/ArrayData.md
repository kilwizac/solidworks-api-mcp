---
type: property
interface: IMathTransform
member: ArrayData
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathTransform.IArrayData
keywords:
  - rotation
  - matrix
  - arraydata
  - imathtransform
  - math
  - transform
  - array
  - data
  - object
  - angle
  - between
  - plane
  - line
  - vba
  - coordinate
  - transforms
  - assembly
  - components
  - patterned
  - cosmetic
  - thread
  - annotations
  - vb
  - net
readonly: null
---

# IMathTransform.ArrayData

Gets and sets the array of 16 doubles for this transform.

## Signature

```csharp
System.Object ArrayData {get; set;}
```
## Parameters

None.

## Return Value

Array of 16 doubles (see Remarks )

## Remarks

The first 9 elements define the 3x3 rotation matrix. The next 3 elements define the translation component. The next element defines the scaling component. The last 3 elements are unused.
The array data argument should be in a form that allows the direct calling of methods such as
IComponent2::Transform2
.

## Examples

- Get Angle Between Plane and Line (VBA) (Get_Angle_Between_Plane_and_Line_Example_VB.htm)
- Get Coordinate System Transform (VBA) (Get_Coordinate_System_Transform_Example_VB.htm)
- Get Transform of Plane (VBA) (Get_Transform_of_Plane_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Get Patterned Cosmetic Thread Annotations Data (C#) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (VB.NET) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VBNET.htm)
- Get Patterned Cosmetic Thread Annotations Data (VBA) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VB.htm)

## See Also

- `IMathTransform.IArrayData`